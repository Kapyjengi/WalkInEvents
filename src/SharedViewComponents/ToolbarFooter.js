import React from "react";
import Slider from '../SharedViewComponents/DistanceSlider'
import { useSelector } from 'react-redux'

export default function ToolbarFooter() {

    const range = useSelector(state => state.range)

    return (
        <div className="footer">
            Range: {range} km
            <Slider />
            <p>This is sticky toolbarfooter. Created by Käpy Oy
            <br />Copyright (c) 2020 Walk-In-Events.</p>
        </div>
    )
}
//content div a needs a margin-bottom?