import React from 'react'
import "./textslider.scss"

const TextSlider = () => {
  return (
        <div className="container">
            <input type="radio" name="dot" id="one" />
            <input type="radio" name="dot" id="two" />
            <input type="radio" name="dot" id="three" />

            <div className="main-card">

                <div className="cards">

                <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img01.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 01</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img02.jpg" alt="" /> 
                            </div>
                            <div className="details">
                                <div className="name">Slide 02</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img03.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 03</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="cards">

                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img01.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 04</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img02.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 05</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img03.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 06</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cards">

                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img01.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 07</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img02.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 08</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="img">
                                <img src="/img/img03.jpg" alt="" />
                            </div>
                            <div class="details">
                                <div className="name">Slide 09</div>
                                <div className="job">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis arcu, aliquet vel velit nec, consectetur ornare libero. Nunc luctus, arcu id tristique tincidunt, nulla sem dignissim lectus, eu tempus enim ligula eu eros.</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="button">
                <label for="one" className=" active one"></label>
                <label for="two" className="two"></label>
                <label for="three" className="three"></label>
            </div>

        </div>
  )
};

export default TextSlider