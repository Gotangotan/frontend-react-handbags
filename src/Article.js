import React from 'react';


function Article({img,title,description}){
    return(

            <section>
                <img src={img} alt=""/>
                <h2>{title}</h2>
                <p>{description}</p>
            </section>


    )
}

export default Article