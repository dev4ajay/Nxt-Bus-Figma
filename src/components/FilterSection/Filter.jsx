import React, { useState } from "react";
const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [isOpen5, setIsOpen5] = useState(true);
  const [isOpen6, setIsOpen6] = useState(true);
  const [isOpen7, setIsOpen7] = useState(true);
  const [isOpen8, setIsOpen8] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };
  const toggleDropdown8 = () => {
    setIsOpen8(!isOpen8);
  };
  return (
    <div className="mb-5">
      <div>
        <div className="d-flex align-items-center justify-content-between">
          <h4>Filters</h4>
          <a href="///">Reset</a>
        </div>
        <div className="location d-flex align-items-center mt-3 ">
          <div className="d-flex align-items-center gap-2 ps-3">
            <img src={require("../../assets/images/location.png")} alt="" />
            <p className="mb-0">Live Tracking (124)</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2" onClick={toggleDropdown}>
                <p className="mb-0">Departure Time</p>
                <i className={`icon ${isOpen ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">Before 6 am (20)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">6 am to 12 pm (30)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">12 pm to 6 pm (33)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">After 6 pm (53)</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2 mmm" onClick={toggleDropdown2}>
                <p className="mb-0">Bus Types</p>
                <i className={`icon ${isOpen2 ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen2 && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">Shater (20)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">Sleeper (30)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">AC (33)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">Non Ac (53)</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2" onClick={toggleDropdown3}>
                <p className="mb-0">Seat Availability</p>
                <i className={`icon ${isOpen3 ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen3 && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">Single Seats (20)</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2 mmmm" onClick={toggleDropdown4}>
                <p className="mb-0">Arrival Time</p>
                <i className={`icon ${isOpen4 ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen4 && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">Before 6 am (20)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">6 am to 12 pm (30)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">12 pm to 6 pm (33)</p>
                </div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <input type="checkbox" />
                  <p className="mb-0">After 6 pm (53)</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2" onClick={toggleDropdown5}>
                <p className="mb-0">Boarding Point</p>
                <i className={`icon ${isOpen5 ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen5 && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <div className="input-container">
                    <img
                      src={require("../../assets/images/search.png")}
                      alt=""
                      className="icon"
                    />
                    <input
                      type="text"
                      placeholder="Boarding point"
                      className="ps-54 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2" onClick={toggleDropdown6}>
                <p className="mb-0">Dropping Point</p>
                <i className={`icon ${isOpen6 ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen6 && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <div className="input-container">
                    <img
                      src={require("../../assets/images/search.png")}
                      alt=""
                      className="icon"
                    />
                    <input
                      type="text"
                      placeholder="Dropping Point"
                      className="ps-54 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2 mmm" onClick={toggleDropdown7}>
                <p className="mb-0">Operator</p>
                <i className={`icon ${isOpen7 ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen7 && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex align-items-center gap-3 py-1 ">
                  <div className="input-container">
                    <img
                      src={require("../../assets/images/search.png")}
                      alt=""
                      className="icon"
                    />
                    <input
                      type="text"
                      placeholder="Operator"
                      className="ps-54 py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="location2 d-flex align-items-center gap-3 py-2 ps-3">
            <div className={`dropdown-container`}>
              <div className="dropdown-header2 mmm" onClick={toggleDropdown8}>
                <p className="mb-0">Amenities</p>
                <i className={`icon ${isOpen8 ? "up" : "down"}`}>&#9660;</i>
              </div>
            </div>
          </div>
          {isOpen8 && (
            <div className="dropdown-content location3">
              {/* Dropdown content goes here */}
              <div>
                <div className="d-flex flex-column gap-3 py-1">
                  <div className="d-flex align-items-center gap-2 border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16669 10.4583C5.81382 9.08637 7.88969 8.33508 10.0334 8.33508C12.177 8.33508 14.2529 9.08637 15.9 10.4583"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.18335 7.50001C3.6187 5.35331 6.7536 4.16888 10 4.16888C13.2464 4.16888 16.3813 5.35331 18.8167 7.50001"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.10834 13.425C7.95434 12.8239 8.9664 12.501 10.0042 12.501C11.0419 12.501 12.054 12.8239 12.9 13.425"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 16.6667H10.0083"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="mb-0">WIFI(1)</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M11.25 1.875H8.75V2.5H11.25V1.875Z"
                        fill="#363636"
                      />
                      <path
                        d="M12.8125 13.75H7.1875C6.65625 13.75 6.25 13.3438 6.25 12.8125V11.5625C6.25 11.0312 6.65625 10.625 7.1875 10.625H12.8125C13.3438 10.625 13.75 11.0312 13.75 11.5625V12.8125C13.75 13.3438 13.3438 13.75 12.8125 13.75ZM7.1875 11.25C7 11.25 6.875 11.375 6.875 11.5625V12.8125C6.875 13 7 13.125 7.1875 13.125H12.8125C13 13.125 13.125 13 13.125 12.8125V11.5625C13.125 11.375 13 11.25 12.8125 11.25H7.1875Z"
                        fill="#363636"
                      />
                      <path
                        d="M7.5 8.125H6.875V10.9375H7.5V8.125Z"
                        fill="#363636"
                      />
                      <path
                        d="M13.125 8.125H12.5V10.9375H13.125V8.125Z"
                        fill="#363636"
                      />
                      <path
                        d="M12.8125 16.25H7.1875C6.65625 16.25 6.25 15.8438 6.25 15.3125V14.0625C6.25 13.5312 6.65625 13.125 7.1875 13.125H12.8125C13.3438 13.125 13.75 13.5312 13.75 14.0625V15.3125C13.75 15.8438 13.3438 16.25 12.8125 16.25ZM7.1875 13.75C7 13.75 6.875 13.875 6.875 14.0625V15.3125C6.875 15.5 7 15.625 7.1875 15.625H12.8125C13 15.625 13.125 15.5 13.125 15.3125V14.0625C13.125 13.875 13 13.75 12.8125 13.75H7.1875Z"
                        fill="#363636"
                      />
                      <path
                        d="M11.875 19.6875H8.125C7.03125 19.6875 6.25 18.9062 6.25 17.8125V16.5625C6.25 16.0312 6.65625 15.625 7.1875 15.625H12.8125C13.3438 15.625 13.75 16.0312 13.75 16.5625V17.8125C13.75 18.9062 12.9688 19.6875 11.875 19.6875ZM7.1875 16.25C7 16.25 6.875 16.375 6.875 16.5625V17.8125C6.875 18.5625 7.375 19.0625 8.125 19.0625H11.875C12.625 19.0625 13.125 18.5625 13.125 17.8125V16.5625C13.125 16.375 13 16.25 12.8125 16.25H7.1875Z"
                        fill="#363636"
                      />
                      <path
                        d="M12.5 8.4375H7.5C7 8.4375 6.25 8 6.25 7.1875V6.25C6.25 5.1875 6.96875 4.1875 7.65625 3.78125L8.4375 3.25V0.9375C8.4375 0.59375 8.71875 0.3125 9.0625 0.3125H10.9375C11.2812 0.3125 11.5625 0.59375 11.5625 0.9375V3.28125L12.375 3.8125C13.0312 4.1875 13.75 5.1875 13.75 6.25V7.1875C13.75 8 13 8.4375 12.5 8.4375ZM9.0625 0.9375V3.59375L8 4.3125C7.46875 4.625 6.875 5.4375 6.875 6.25V7.1875C6.875 7.625 7.3125 7.8125 7.5 7.8125H12.5C12.6875 7.8125 13.125 7.625 13.125 7.1875V6.25C13.125 5.4375 12.5625 4.625 12.0312 4.34375L10.9375 3.59375V0.9375H9.0625Z"
                        fill="#363636"
                      />
                      <path
                        d="M7.8125 6.25H7.1875C7.1875 5.65625 7.46875 5.09375 7.9375 4.75C8.21875 4.53125 8.875 4.125 8.875 4.125L9.21875 4.65625C9.21875 4.65625 8.5625 5.0625 8.28125 5.28125C8 5.46875 7.8125 5.84375 7.8125 6.25Z"
                        fill="#363636"
                      />
                      <path
                        d="M7.8125 6.5625H7.1875V7.1875H7.8125V6.5625Z"
                        fill="#363636"
                      />
                    </svg>{" "}
                    <p className="mb-0">Water Bottle(48)</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M16.1868 1.61761H3.81323C2.71283 1.61761 1.81763 2.51281 1.81763 3.61321V16.386C1.81763 17.4864 2.71283 18.3816 3.81323 18.3816H16.1872C17.2876 18.3816 18.1828 17.4864 18.1828 16.386V10C18.1828 9.77961 18.004 9.60081 17.7836 9.60081C17.5632 9.60081 17.3844 9.77961 17.3844 10V16.3864C17.3844 17.0468 16.8472 17.584 16.1868 17.584H3.81323C3.15283 17.584 2.61563 17.0468 2.61563 16.3864V3.61361C2.61563 2.95321 3.15283 2.41601 3.81323 2.41601H16.1872C16.8476 2.41601 17.3848 2.95321 17.3848 3.61361V4.38681C17.3848 4.39961 17.3844 4.41281 17.3844 4.42561C17.3772 4.90001 17.0008 5.95121 16.3908 6.61681C14.2976 8.90081 9.59203 9.59801 9.54483 9.60481C9.33763 9.63441 9.18803 9.81921 9.20323 10.0284C9.21803 10.2372 9.39203 10.3992 9.60123 10.3992C10.2 10.3992 10.7596 10.636 11.1768 11.066C11.5936 11.4956 11.8136 12.0628 11.7956 12.6624C11.7556 13.9896 10.9588 14.74 9.54643 14.7876C9.49843 14.7884 9.45083 14.79 9.40203 14.79H5.01043C4.42323 14.79 3.67963 15.1252 3.43443 15.8612C3.36483 16.0704 3.47763 16.2964 3.68683 16.366C3.89603 16.4356 4.12203 16.3228 4.19163 16.1136C4.32003 15.728 4.75163 15.588 5.01043 15.588H9.40123C12.4288 15.588 14.0872 13.8916 15.3108 12.2324C16.0184 11.2724 18.1668 8.35801 18.1824 4.42961C18.1824 4.42361 18.1828 4.41761 18.1828 4.41161V3.61361C18.1828 2.51321 17.2872 1.61761 16.1868 1.61761ZM14.668 11.7588C14.014 12.646 13.2708 13.4956 12.2696 14.0684C12.466 13.6744 12.5772 13.2108 12.5932 12.686C12.6176 11.8684 12.318 11.0956 11.7496 10.5096C11.5884 10.3436 11.4116 10.1988 11.2224 10.076C12.888 9.66241 15.4796 8.79201 16.9792 7.15601C16.9916 7.14281 17.0036 7.12881 17.0156 7.11521C16.3948 9.41721 15.1616 11.09 14.668 11.7588Z"
                        fill="#363636"
                      />
                    </svg>
                    <p className="mb-0">Blankets(15)</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M4.16669 10.4583C5.81382 9.08637 7.88969 8.33508 10.0334 8.33508C12.177 8.33508 14.2529 9.08637 15.9 10.4583"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.18335 7.50001C3.6187 5.35331 6.7536 4.16888 10 4.16888C13.2464 4.16888 16.3813 5.35331 18.8167 7.50001"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.10834 13.425C7.95434 12.8239 8.9664 12.501 10.0042 12.501C11.0419 12.501 12.054 12.8239 12.9 13.425"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 16.6667H10.0083"
                        stroke="#363636"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="mb-0">Movie(15)</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_23_1459)">
                        <path
                          d="M13.75 7.91667L8.75 14.5833L9.58333 10.4167H6.25L11.25 3.75L10.4167 7.91667H13.75Z"
                          stroke="#363636"
                          stroke-miterlimit="10"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.4183 7.50085C15.9233 7.88085 16.25 8.48585 16.25 9.16669C16.25 9.84835 15.9225 10.4534 15.4166 10.8334"
                          stroke="#363636"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8333 5.80664C17.0683 6.41997 17.9166 7.69414 17.9166 9.16664C17.9166 10.6391 17.0683 11.9133 15.8333 12.5266"
                          stroke="#363636"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.2533 4.16669C18.2091 4.98335 19.5833 6.91502 19.5833 9.16669C19.5833 11.4184 18.2091 13.35 16.2533 14.1667"
                          stroke="#363636"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.58246 7.50085C4.07746 7.88085 3.75079 8.48585 3.75079 9.16669C3.75079 9.84835 4.07829 10.4534 4.58413 10.8334"
                          stroke="#363636"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.1675 5.80664C2.9325 6.41997 2.08417 7.69414 2.08417 9.16664C2.08417 10.6391 2.9325 11.9133 4.1675 12.5266"
                          stroke="#363636"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.74748 4.16669C1.79165 4.98335 0.41748 6.91419 0.41748 9.16669C0.41748 11.4192 1.79165 13.35 3.74748 14.1667"
                          stroke="#363636"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23_1459">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="mb-0">Charging Point(15)</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M12.937 9.69958H1.97697C1.72272 9.69958 1.5166 9.88904 1.5166 10.1227V10.1713C1.5166 10.405 1.72272 10.5944 1.97697 10.5944H12.937C13.1913 10.5944 13.3974 10.405 13.3974 10.1713V10.1227C13.3974 9.88904 13.1913 9.69958 12.937 9.69958Z"
                        stroke="#363636"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.80969 10.644C2.58154 12.4259 4.04073 13.9813 5.92538 14.7145C5.92538 14.7145 6.01945 15.3508 6.02149 15.6724C6.00698 18.5114 3.61327 19.3483 4.26371 19.3546H15.2065C14.8167 18.9648 13.3675 17.6019 13.3557 15.7714C13.3557 12.9167 17.2038 10.6289 16.3001 10.6215H13.4423L1.80969 10.644Z"
                        stroke="#363636"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1067 1.74679V1.32549C14.1067 0.948784 14.4099 0.645508 14.7867 0.645508H17.8032C18.1799 0.645508 18.4832 0.948784 18.4832 1.32549V9.84494C18.4832 10.2216 18.1799 10.5249 17.8032 10.5249H14.7867C14.4099 10.5249 14.1067 10.2216 14.1067 9.84494V3.04011"
                        stroke="#363636"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.6029 1.84192H13.6049C13.3507 1.84192 13.1445 2.03138 13.1445 2.26508V2.55011C13.1445 2.78382 13.3507 2.97327 13.6049 2.97327H15.6029C15.8571 2.97327 16.0632 2.78382 16.0632 2.55011V2.26508C16.0632 2.03138 15.8571 1.84192 15.6029 1.84192Z"
                        stroke="#363636"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.77161 13.6804C4.81828 13.146 3.87615 12.4219 2.97278 11.0389"
                        stroke="#363636"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-dasharray="53.33 26.67 13.33 26.67"
                      />
                      <path
                        d="M14.4966 14.1878C14.347 14.1878 14.2266 14.3082 14.2266 14.4578V15.9698C14.2266 16.1194 14.347 16.2399 14.4966 16.2399H14.7936C14.9293 16.2399 15.0408 16.1405 15.0602 16.0103H15.7008L16.0789 16.3884V17.0075C15.9488 17.0269 15.8495 17.1384 15.8495 17.2741V17.5711C15.8495 17.7207 15.9699 17.8411 16.1194 17.8411H17.6315C17.781 17.8411 17.9015 17.7207 17.9015 17.5711V17.2741C17.9015 17.1384 17.8021 17.0269 17.672 17.0075V15.6006L16.3406 14.4173H15.0602C15.0408 14.2871 14.9293 14.1878 14.7936 14.1878H14.4966Z"
                        stroke="#363636"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.2152 15.9427H13.3715M13.5581 14.4993H14.22"
                        stroke="#363636"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.1443 17.8338V19.0846C16.1443 19.2341 16.2647 19.3546 16.4143 19.3546H17.3176C17.4672 19.3546 17.5877 19.2341 17.5877 19.0846V17.8505"
                        stroke="#363636"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="mb-0">Toilet</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
