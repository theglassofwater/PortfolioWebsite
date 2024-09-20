import torch
from transformers import GenerationConfig
from pretty_midi import PrettyMIDI
import matplotlib.pyplot as plt
from matplotlib import use
from numpy import arange
from soundfile import write


def generate_song(model, tokenizer, max_length=200, ids=[1,], song_filename="api/common/assets/song.mid", pianoroll_filename="api/common/assets/song.png"):
    tokens = generate_tokens(model, tokenizer, max_length, ids)
    tokens_to_file(tokens, tokenizer, song_filename)
    make_piano_roll(song_filename, pianoroll_filename)
    return tokens


def midi_to_mp3(midi_filename, mp3_filename="api/common/assets/song.mp3", sr=22050):
    midi_data = PrettyMIDI(midi_filename)
    audio_data = midi_data.synthesize(fs=sr)
    write(mp3_filename, audio_data, sr)
    return audio_data


def generate_tokens(model, tokenizer, max_length, ids=[1,]): # cuda=False
    model.eval()

    new_tokens = max_length - len(ids)

    input = torch.tensor([ids])

    generation_config = GenerationConfig(
        max_new_tokens=new_tokens,
        min_tokens=25,
        do_sample=True,
        temperature=0.9,
        pad_token_id=tokenizer.pad_token_id,
    )
    if torch.cuda.is_available():
        input = input.cuda()

    output = model.generate(input, generation_config=generation_config)
    return output[0]

def tokens_to_file(tokens, tokenizer, filename="song.mid"):
    midi = tokenizer.decode(tokens)
    midi.dump_midi(filename)

def make_piano_roll(song, output_filename="song.png"):

    song = PrettyMIDI(song)
    piano_roll = song.get_piano_roll()

    use('Agg')
    fig = plt.figure(figsize=(10, 5))
    ax = fig.add_subplot()
    plt.imshow(piano_roll, aspect='auto', origin='upper',)
    x_axis = arange(0, len(piano_roll[0]), 60*song.resolution) # x_axis = np.arange(0, len(piano_roll[0]), 60*song.resolution)
    plt.xticks(x_axis, [i/(song.resolution*12) for i in x_axis])
    plt.xlabel(f'Time (s), {round(len(piano_roll[0])/(song.resolution*12), 3)}', color='white')
    plt.ylabel('MIDI Note Number', color='white')
    plt.title('Piano Roll', color='white')
    # plt.colorbar(label='Note On/Off', ticks=[0, 1])
    


    ax.tick_params(axis='both', colors='white')
    plt.savefig(output_filename, transparent=True)
    # plt.close(fig)
