import React, {useState} from 'react';
import about1 from '../../assets/team-1.jpg';
import about2 from '../../assets/team-2.jpg';
import about3 from '../../assets/team-3.jpg';
import gallery1 from '../../assets/gallery-img1.png';
import gallery2 from '../../assets/gallery-img2.png';
import gallery3 from '../../assets/gallery-img3.png';
import gallery4 from '../../assets/gallery-img4.png';
import gallery5 from '../../assets/gallery-img5.png';
import gallery6 from '../../assets/gallery-img6.png';
import galleryvideo from '../../assets/video-bg.png';
import googleplay from '../../assets/googleplay.png';
import applestore from '../../assets/applestore.png';




function Home(props) {


    const [thankuMessage, SetThankuMessage] = useState(false);

    function formsubmit(e) {
      e.preventDefault();
  
              SetThankuMessage(true);
                setTimeout(() => {
                  SetThankuMessage(false);
                }, 3000);
        
        e.target.reset();
    }

  return(
    <>
  
      <section className="banner-section mb-5" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <h1 className="banner-title">Fitness</h1>
                    <h3 className="banner-title2">redeemed.</h3>
                    <h4  className="banner-title3">Now pay per use & gym anytime, anywhere!</h4>
                </div>
            </div>            
        </div>
      </section>
   
      <section className="about pt-2 pb-5" id="about">
      <div className="container-fluid">
        <p className="text-center">A word form our Creators</p>
        <h1 className="text-center pb-3">About fitness</h1>   
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row about-bg">
                            <div className="col-lg-5 col-md-5">
                                <img src={about1} class="d-block w-100" alt="about-img"/>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="about-text text-center">
                                    <i>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries”</i>
                                    <h3 className="about-name py-3">Rohit-Chattopadhyay</h3>
                                    <div className="icon-about text-center">
                                        <i class="fab fa-facebook-f pr-3"></i>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row about-bg">
                            <div className="col-lg-5 col-md-5">
                                <img src={about2} class="d-block w-100" alt="about-img"/>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="about-text text-center">
                                    <i>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries”</i>
                                    <h3 className="about-name py-3">Rohit-Chattopadhyay</h3>
                                    <div className="icon-about text-center">
                                        <i class="fab fa-facebook-f pr-3"></i>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row about-bg">
                            <div className="col-lg-5 col-md-5">
                                <img src={about3} class="d-block w-100" alt="about-img"/>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="about-text text-center">
                                    <i>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries”</i>
                                    <h3 className="about-name py-3">Rohit-Chattopadhyay</h3>
                                    <div className="icon-about text-center">
                                        <i class="fab fa-facebook-f pr-3"></i>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>

        </div>
      </section>


      <section className="services bg-light py-5" id="benefits">
      <div className="container">
          <div className="section-header text-center pb-4">
              <h1 className="head-title">Benefits</h1>
              <p>We make it easy and affordable for you to stay fit and healthy</p>
          </div>
          <div className="client-data py-2">
              <div className="row">
                  <div className="col-md-12 col-lg-4">
                      <div className="services-item">
                          <div className="icon1 text-center">
                          <i class="fas fa-dumbbell"></i>
                          </div>
                          <h3 className="text-center">State of art equipments</h3>
                          <p className="text-center py-3">Modern conveniences & functional spaces to help you gain more from workout.</p>
                          <div className="text-center"><a className="btn mainbtn" href="#">Learn More</a></div>
                      </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                      <div className="services-item">
                          <div className="icon1 text-center">
                          <i class="fas fa-wallet"></i>
                          </div>
                          <h3 className="text-center">Pay per use</h3>
                          <p className="text-center py-3">Pay only for the number of hours you workout in gym.</p>
                          <div className="text-center pt-4"><a className="btn mainbtn" href="#">Learn More</a></div>
                      </div>
                  </div>
                  <div className="col-md-12 col-lg-4">
                      <div className="services-item">
                          <div className="icon1 text-center">
                          <i class="fas fa-certificate"></i>
                          </div>
                          <h3 className="text-center">Certified experts</h3>
                          <p className="text-center py-3">Certified experts and trainers to help you acheive your fitness goals.</p>
                          <div className="text-center pt-4"><a className="btn mainbtn" href="#">Learn More</a></div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      </section>

      <section className="gallery py-5" id="gallery">
        <div className="container">
          <div className="section-header text-center pb-4">
              <h1 className="head-title">Gallery</h1>
          </div>
              
          <div class="row ">
            <div class="col-md-12">
              <ul class="nav nav-pills justify-content-center mb-2" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                </li>
                <li class="nav-item px-5" role="presentation">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Photos</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Videos</a>
                </li>
                </ul>

                <div class="mt-4">
                    <hr/>
                </div>

                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row pt-4">
                        <div className="col-lg-12 mb-2">
                            <img src={galleryvideo} className="img-fluid" alt="gallery-img"/>
                            <div className="icon-video text-center">
                            <a href="https://www.youtube.com/watch?v=HQfF5XRVXjU" target="_blank" rel="noopener noreferrer"><i class="fas fa-play-circle"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-4 col-md-4 mb-4">
                            <img src={gallery1} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4">
                            <img src={gallery2} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <img src={gallery3} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-3 col-md-3 mb-4">
                            <img src={gallery4} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-4">
                            <img src={gallery5} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img src={gallery6} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '550px', height: '500px',}}/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row pt-4">
                        <div className="col-lg-4 col-md-4 mb-4">
                            <img src={gallery1} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4">
                            <img src={gallery2} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-2">
                            <img src={gallery3} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-lg-3 col-md-3 mb-4">
                            <img src={gallery4} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-3 col-md-3 mb-4">
                            <img src={gallery5} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '390px', height: '500px',}}/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img src={gallery6} className="img-fluid" alt="gallery-img" style={{top: '0px', left: '0px', width: '550px', height: '500px',}}/>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div className="row pt-4">
                        <div className="col-lg-12 mb-2">
                            <img src={galleryvideo} className="img-fluid" alt="gallery-img"/>
                            <div className="icon-video text-center">
                            <a href="https://www.youtube.com/watch?v=HQfF5XRVXjU" target="_blank" rel="noopener noreferrer"><i class="fas fa-play-circle"></i></a>
                            </div>
                        </div>
                        </div>
                </div>
                </div>
                </div>
                </div>
           
        </div>
     </section>
      

      <section className="contact-section py-5 bg-light" id="contact">
        <div className="container">
         <div className="section-header text-center pb-4">
              <h1 className="head-title">Have a Query?</h1>
              <p>Please fill out the quick form and we will be in touch with you at the earliest</p>
          </div>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <form className="contact-form" onSubmit={formsubmit} id="validateform">
                        <div className="row">
                            <div className="form-group col-lg-6">
                                <input id="name" type="text" name="name" placeholder="Enter your name" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <input id="email" type="email" name="email" placeholder="Enter your email" className="form-control" required/>
                            </div>
                            <div className="form-group col-lg-12">
                                <textarea id="message" type="text" name="message" placeholder="Tell us what you are looking for" className="form-control" required></textarea>
                            </div>
                           
                            <div className="form-group col-lg-12 text-center">
                                <button type="submit" name="submit" className="btn btn-primary">Sumbit</button>
                            </div>
                        </div>
                        {thankuMessage ? <span className="text-success text-center my-2">"Thank you for contacting us!"</span> : null}
                    </form>
                </div>
           
            </div>
        </div>
      </section>

        <section className="map">
        <div className="container-fluid bg-light">
                <div className="col-lg-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2721236892253!2d73.93608751395384!3d18.561766487384997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e05b418fe3%3A0xbae7d743b1363a17!2sPune%20Fitness%20Club%20Kharadi!5e0!3m2!1sen!2sin!4v1604751271015!5m2!1sen!2sin" width="1300" height="450" frameborder="0" style={{border:0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>    
                </div>
            </div>
        </section>

        <section className="contact-info py-4">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-md-4 icon-info"><i class="fas fa-map pr-2"></i><small>Lorem ipsum dolor sit amet</small></div>
                        <div className="col-md-3 icon-info"><i class="fas fa-phone px-2"></i><small>+91 9898989898</small></div>
                        <div className="col-md-4 icon-info"><i class="fas fa-envelope px-2"></i><small>recomp@fitness.com</small></div>
                    </div>
                </div>
                <div className="col-lg-2 text-center">
                    <div className="icon-info text-center">
                    <i class="fab fa-facebook-f pr-3"></i>
                    <i class="fab fa-twitter pr-3"></i>
                    <i class="fab fa-google-plus-g"></i>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <img src={googleplay} width="150" className="pr-3" alt="google-play"/>
                    <img src={applestore} width="160" alt="apple-store"/>
                </div>
                </div>
            </div>
        </section>
  
    </>
  );

  

}

export default Home;
