import React from 'react'

function YoutubeEmbed({id}) {

  return (
    <div>
        <iframe
            className='w-[65vw] h-[100%] max-[1300px]:w-[95vw] aspect-video'
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder={0}
            allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
            allowFullScreen
            title='Youtube video'
        />
    </div>
  )
}

export default YoutubeEmbed