import torch
from transformers import GenerationConfig
import pretty_midi
import matplotlib.pyplot as plt
from numpy import arange


def generate_song(model, tokenizer, max_length, ids, song_filename="song.mid", pianoroll_filename="pianoroll.png"):
    tokens = generate_tokens(model, tokenizer, max_length, ids)
    tokens_to_file(tokens, tokenizer, song_filename)
    make_piano_roll(song_filename, pianoroll_filename)
    return tokens






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

def make_piano_roll(song, output_filename="pianoroll.png"): ## file as input
    # if str(type(song)) == "<class 'symusic.core.ScoreTick'>":
    #     holder_path = "holder.mid"
    #     song.dump_midi(holder_path)
    #     song=holder_path
    #     fn = os.path.join(song)
    #     song = pretty_midi.PrettyMIDI(fn)
    # elif type(song) == str:
    song = pretty_midi.PrettyMIDI(song)
    piano_roll = song.get_piano_roll()

    plt.figure(figsize=(10, 5))
    plt.imshow(piano_roll, aspect='auto', origin='upper',)
    x_axis = arange(0, len(piano_roll[0]), 60*song.resolution) # x_axis = np.arange(0, len(piano_roll[0]), 60*song.resolution)
    plt.xticks(x_axis, [i/(song.resolution*12) for i in x_axis])
    plt.xlabel(f'Time (s), {round(len(piano_roll[0])/(song.resolution*12), 3)}')
    plt.ylabel('MIDI Note Number')
    plt.title('Piano Roll')
    # plt.colorbar(label='Note On/Off', ticks=[0, 1])
    plt.savefig(output_filename)
    # plt.show()
