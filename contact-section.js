function insertContactSection(containerId) {
    const contactSectionHTML = `
      <section class="contact-section" id="contact-section">
        <div class="container container-1200">
  
          <div class="contact-head mb-lg-5">
            <h2>Contact Us</h2>
            <p>Need assistance or have a query? Our contact team is just a message away. We're committed to
              providing swift and helpful responses to all your inquiries. Get in touch and let us assist you promptly.</p>
          </div>
  
          <div class="row">
            <div class="col-lg-6 col-12">
              <a href="mailto:contact@oxit.hu" style="color: white; text-decoration: underline;">contact@oxit.hu</a>
              </div>
            <div class="col-md-6 d-lg-block d-none">
              <div class="contact-map">
                <div style="max-width:100%;overflow:hidden;width:590px;height:350px;border-radius: 20px;">
                  <div id="gmap-canvas" style="height:100%; width:100%;max-width:100%;"><iframe
                    style="height:100%;width:100%;border:0;" frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=Galagonya+u.+5&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    `;
  
    const container = document.getElementById(containerId);
    container.innerHTML = contactSectionHTML;
  }
  