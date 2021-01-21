import React from 'react'

export default function Output(props) {
    return (
        <div>
            {
              props.data ?
            props.data.map(el=>{
                return(
                <div key={el.id}>
                <iframe
                src={el.embed_url}
                title={el.title}
                frameBorder='0'
                width='250px'
                height='150'
                ></iframe>
                <b>{el.title}</b>
        </div>
    )
})
:<h3>Empty...</h3>
 }
 </div>
 )
            }
