'use client';

import { useEffect, useState } from "react";
import { getMemes } from "../services/api";
import { Grid } from "@mui/material";

import MyGallery from "./Meme";
const Memes = () => {
    const [memes, setMemes] = useState([]);
    const [after, setAfter] = useState(null);

    useEffect(() => {
        const getData = async () => {
            let response = await getMemes();
            setMemes(response.data.children);
            setAfter(response.data.after);
        }
        getData();
    }, [])

    const fetchMoreMemes = async () => {    
        if (!after) return; 

        let response = await getMemes(after); 
        setMemes(prevMemes => [...prevMemes, ...response.data.children]);
        setAfter(response.data.after);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchMoreMemes();
            }
        }, { threshold: 1 });
        observer.observe(document.querySelector("#observer"));

        return () => observer.disconnect(); 
    }, [after]);


    return (
        <Grid container margin={3}>
            {
                memes.map((meme, index) => (
                    <Grid item xs={3} key={index}>
                        <MyGallery meme={meme} />
                    </Grid>
                ))
            }
            <div id="observer" style={{ height: 1 }}></div>
        </Grid>
    );
}

export default Memes;