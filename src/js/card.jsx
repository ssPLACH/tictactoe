import React from "react";


const Card = () => {
    return (
        <>
            <div className="bg-success card text-withe">
                <div className="card-body bg-primary mx-5 px-1">
                    <h5 className="card-title">CHOOSE YOUR WEAPON</h5>
                    <input name="Player1" defaultValue="Player 1 Username" />
                    <input name="Player2" defaultValue="Player 2 Username" />
                    <br></br>
                    <a href="#" className="btn btn-primary btn-lg">
                        <i class="fa-solid fa-x"></i>
                    </a>
                    <a href="#" className="btn btn-primary btn-lg">
                        <i class="bi bi-circle"></i>
                    </a>
                </div>
                <br></br>
            </div>
        </>
    );
};

export default Card;