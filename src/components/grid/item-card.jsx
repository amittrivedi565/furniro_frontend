import React, { useState } from "react";
import { ReactComponent as ShareIcon } from "../../assets/svgs/item-card/share.svg";
import { ReactComponent as CompareIcon } from "../../assets/svgs/item-card/compare.svg";
import { ReactComponent as LikeIcon } from "../../assets/svgs/item-card/heart.svg";

const ItemCard = ({ product }) => {
    const { name, category, price, discounted_price, image, discount } = product;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="item-card d-flex flex-column mt-5"
            style={{
                width: "285px",
                height: "420px",
                backgroundColor: isHovered ? "gray" : "whitesmoke",
                overflow: "hidden",
                position: "relative",
                borderRadius: "8px",
                transition: "background-color 0.3s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="item-image"
                style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    overflow: "hidden",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        transition: "filter 0.3s ease",
                        filter: isHovered ? "grayscale(100%)" : "none",
                    }}
                    src={`/${image.replace("./", "")}`}
                    alt={name}
                />
                {/* Tags */}
                {!isHovered && discount === null && (
                    <div
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#2EC1AC",
                            borderRadius: "50%",
                            color: "white",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            fontWeight: "bold",
                            fontSize: "14px",
                            zIndex: 2,
                        }}
                    >
                        New
                    </div>
                )}
                {!isHovered && discount && (
                    <div
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#E97171",
                            borderRadius: "50%",
                            color: "white",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: discount === null ? "70px" : "10px",
                            right: "10px",
                            fontWeight: "bold",
                            fontSize: "14px",
                            zIndex: 2,
                        }}
                    >
                        -{discount}
                    </div>
                )}
                {/* Gray Overlay with Buttons */}
                {isHovered && (
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            zIndex: 1,
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <button
                            style={{
                                padding: "10px 20px",
                                marginTop:"5em",
                                backgroundColor: "#fff",
                                color: "#B88E2F",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                transition: "background-color 0.3s ease",
                            }}
                            onClick={() => alert(`Added ${name} to cart!`)}
                        >
                            Add to Cart
                        </button>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <button
                                style={{
                                    border: "none",
                                    borderRadius: "4px",
                                    color: "white",
                                    backgroundColor: "transparent",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",  // Space between icon and text
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => alert(`Share ${name}`)}
                            >
                                <ShareIcon style={{ width: "12px", height: "13px" }} />
                                <span>Share</span>
                            </button>
                            <button
                                style={{

                                    border: "none",
                                    borderRadius: "4px",
                                    color: "white",
                                    backgroundColor: "transparent",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",  // Space between icon and text
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => alert(`Compare ${name}`)}
                            >
                                <CompareIcon style={{ width: "12px", height: "13px" }} />
                                <span>Compare</span>
                            </button>
                            <button
                                style={{
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "transparent",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",  // Space between icon and text
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => alert(`Liked ${name}`)}
                            >
                                <LikeIcon style={{ width: "12px", height: "13px" }} />
                                <span>Like</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="container mt-2">
                <div className="item-title">
                    <span style={{ fontSize: "24px", fontWeight: "600" }}>{name}</span>
                </div>
                <div className="item-category" style={{ color: "gray" }}>{category}</div>
                <div className="item-price">
                    <b>
                        <span style={{ fontSize: "20px" }}>
                            {discounted_price != null ? discounted_price : price}
                        </span>
                    </b>
                    &nbsp;
                    {discounted_price != null && (
                        <s style={{ color: "gray", fontSize: "16px" }}>{price}</s>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
