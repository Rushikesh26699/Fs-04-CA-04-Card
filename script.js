function Card(){
    return <div style = {{border : "4px solid black",width : "500px",height : "500px" ,marginLeft : '30%',background: 'rgb(238,174,202)' ,marginTop : "3%",borderRadius : "5px"}}>
        <div style = {{width : "80%",height:"90%",display : "flex",justifyContent : "center",flexDirection : "column",alignItems : "center",marginLeft : "10%",marginTop : "6%",border:'1px solid black',borderRadius : "15px"}}>
            <img src = "./profile.jpg" width = "300px" height = "50%" />
            <div style = {{display : "flex",justifyContent : "center",alignItems: "center",height:"12%"}}>
                <h2 style = {{margin : "5px",padding : "0px"}}>RUSHIKESH DHANAWADE</h2>
            </div>
            <div style = {{display : "flex",height:"12%",justifyContent : "center",alignItems: "center",opacity:'.8',fontSize : "1.3rem"}}>
                <p>UI/UX Designer</p>
            </div>
            <div style = {{width : "100%",height:"9%",display : "flex",justifyContent : "space-around", flexDirection : "row",alignItems : "end",fontSize : "1.6rem",fontWeight : "700"}}>
                <p style = {{margin : "0px",padding : "0px"}}>20</p>
                <p style = {{margin : "0px",paddingRight : "30px"}}>10</p>
                <p style = {{margin : "0px",padding : "0px"}}>10k</p>

            </div>
            <div style = {{width : "100%",height:"15%",display : "flex",justifyContent : "space-around", flexDirection : "row",alignItems : "start",fontSize : "1.3rem",fontWeight : "300",opacity:'.8'}}>
            <p style = {{margin : "0px",padding : "0px"}}>Posts</p>
            <p style = {{margin : "0px",padding : "0px"}}>Followings</p>
            <p style = {{margin : "0px",padding : "0px"}}>Followers</p>

            </div>

        </div>

    </div>
}

ReactDOM.render(<Card />,document.getElementById('root'))