
function preload()
{
    load_videos(6, 6);
}

function load_videos(videos_per_row, videos_per_column)
{
    let num_vids = videos_per_row * videos_per_column;
    videos_per_column = videos_per_column - 1;
    size = windowWidth / videos_per_row;
    
    let x,y;
    let index = -1;
    video_names = [];
    for(let vid_inc = 0; vid_inc <= num_vids - 1; vid_inc++)
    {
        video_names.push(`assets/${vid_inc+1}.mp4`);
    }

    shuffle_videos(video_names);

    for(let i = 0; i <= videos_per_row; i++)
    {
        for(let j = 0; j <= videos_per_column; j++)
        {
            x = i * size;
            y = j * size * 0.5623;
            index++
            video_select(video_names[index], size, x, y, 1.0);
            
        }
    }

    function shuffle_videos(array) 
    {
        for (let i = array.length - 1; i > 0; i--) 
        {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

function video_select(file_path,vid_size,x_pos,y_pos,vol)
{
    let vid = createVideo(file_path);
    vid.size(vid_size,vid_size * 0.5625);
    vid.position(x_pos,y_pos);
    vid.volume(vol);
    vid.loop();
}

function setup()
{ 
    createCanvas(windowWidth,windowHeight)
    background(255);
}
