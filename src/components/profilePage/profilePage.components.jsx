import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import "./profilePage.styles.css";

function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cityData, setCityData] = useState("");
  const [bioData, setBioData] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = Cookies.get("userId");
    const getData = async () => {
      const dataUser = await axios.get(
        `http://localhost:5001/api/userProfile/show/${userId}`
      );
      const data = dataUser.data.data.dataProfile;
      const { firstname, lastname, bio, city, social_media_url } = data;
      setFirstName(firstname);
      setLastName(lastname);
      setCityData(city);
      setBioData(bio);
      setSocialMedia(social_media_url);
    };
    getData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const sentData = async () => {
        const userId = Cookies.get("userId");
        const result = await axios.put(
          `http://localhost:5001/api/userProfile/update/${userId}`,
          {
            firstname: firstName,
            lastname: lastName,
            bio: bioData,
            city: cityData,
            social_media_url: socialMedia,
          }
        );
        if (result.status === 200) {
          setSuccess(true);
          return;
        }
      };
      sentData();
    } catch (error) {
      console.log(error);
    }
  }

  function handleGoBack() {
    navigate("/home");
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h1 className="text-center mt-5 mb-5">User Profile</h1>
            {success === true && (
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                <strong>Berhasil</strong> Mengupdate Profile!.
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={cityData}
                  onChange={(e) => setCityData(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="socialmedia" className="form-label">
                  Social Media Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="socialmedia"
                  value={socialMedia}
                  onChange={(e) => setSocialMedia(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="biodata" className="form-label">
                  Biodata
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="biodata"
                  rows="3"
                  value={bioData}
                  onChange={(e) => setBioData(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary mx-4 btnsubmit"
                >
                  Submit
                </button>
                <button
                  onClick={handleGoBack}
                  className="btn btn-danger mx-4 btngoback"
                >
                  Go Back
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
