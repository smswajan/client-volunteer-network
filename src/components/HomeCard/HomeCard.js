import React from "react";
import "./HomeCard.scss";
import LoadingImg from "../../images/images/loading-img.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import fireApp from "../../fire-app";

const storage = fireApp.storage();

const HomeCard = ({ properties }) => {
    const [imgLink, setImgLink] = useState(null);
    const storageRef = storage.ref().child("volunteer").child(properties.img);
    useEffect(() => {
        storageRef.getDownloadURL().then((res) => {
            setImgLink(res);
            console.log(res);
        });
    }, []);
    const color = properties.color ? properties.color : "#421FCF";
    return (
        <div className="col-md-3 mb-4">
            <Link className="custom-link" to={"/register/" + properties.key}>
                <div className="options card">
                    <img
                        style={{ height: "220px" }}
                        src={imgLink ? imgLink : LoadingImg}
                        alt=""
                        className="card-img-top"
                    />
                    <div
                        style={{ marginTop: "-8px", backgroundColor: color }}
                        className="card-body"
                    >
                        <h6 className="text-center text-white">
                            {properties.text}{" "}
                        </h6>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeCard;
