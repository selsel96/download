
<section class="brochure">
<button
              type="button"
              class="col-3 mt-lg-4 mt-md-2 mt-4 read-more-btn read-more text-center text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              Download Brochure
            </button>

            <!-- Modal -->
            <div
              class="modal fade px-md-2 px-4"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Download Brochure
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div class="modal-body px-md-5 px-4">
                    <form class="form-container" method="POST" id="enquiryForm" >
                        <div class="form-group mb-3">
                          <label class="form-label" for="modalname">Name: </label>
                          <input class="form-input " type="text" placeholder="Enter Your name" id="modalname" name="modalname" required />
                          <span id="name-error" class="error-message"></span>
                          <span class="error-message"><?php echo $nameErr; ?></span>
                        </div>
                      
                        <div class="form-group mb-3">
                          <label class="form-label" for="modalmobile">Mobile:</label>
                          <input class="form-input" type="tel" placeholder="Enter Your Mobile" id="modalmobile" name="modalmobile" required />
                          <span id="mobile-error" class="error-message"></span>
                          <span class="error-message"><?php echo $mobileErr; ?></span>
                        </div>
                      
                        <div class="form-group mb-3">
                          <label class="form-label" for="modalemail">Email:</label>
                          <input class="form-input" type="email" placeholder="Enter Your Email" id="modalemail" name="modalemail" required />
                          <span id="email-error" class="error-message"></span>
                          <span class="error-message"><?php echo $emailErr; ?></span>
                        </div>
                      
                        <button class="submit-brochure" type="submit" name="modalsubmit" id="submitBtn" disabled>Submit</button>
                        <div id="form-messages"></div>
                      </form>
                      
                      
                      <div id="download-readMore" class="mt-3" style="display: none;">
    <a href="./assets/ztone-brochure.pdf" class="text-decoration-none" download>Download Brochure</a>
</div>
                  </div>
                  <div class="modal-footer">
                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button> -->
                  </div>
                </div>
              </div>
            </div>
        </section>