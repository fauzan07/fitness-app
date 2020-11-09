import React, {useEffect} from 'react';


function Footer(props) {

  var date = new Date().getFullYear();


 
  return(
    
    <>
    <footer>
        <section  className="footer-area">
          <hr/>
            <div className="container-fluid">
                <div className="row">
                    <div className="w-100"></div>
                    <div className="col-md-12">
                       <p className="text-muted"><small>&copy; {date} -  Fitness All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
          </section>
    </footer>

 
    </>
  
  );

}

export default Footer;
