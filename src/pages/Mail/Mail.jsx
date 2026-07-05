import "./Mail.css";
import MenuIcon from "@mui/icons-material/Menu";
import MailBox from "../../components/MailBox/MailBox";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MailBoxData } from "../../datas";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Mail() {
  const [MailButtomMenu, setMailButtomMenu] = useState(false);
  const [favorites, setFavorites] = useState([]);

const favoriteHandler = (id) => {
  setFavorites((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};

  const MailButtomMenuIconHandler = () => {
    setMailButtomMenu(!MailButtomMenu);
  };

  return (
    <div className="mail">
      <div className="mailTop">
        <span>Mail</span>
        <div className="mailTopInput">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      </div>

      <div className="mailButtom">
        <div
          className={`mailButtomContent ${MailButtomMenu ? "MailButtomContentOpen" : ""}`}
        >
          <div className="mailButtomContentCard">
            {MailBoxData.map(mail => (
              <Card key={mail.id} style={{border:'none' ,borderRadius:'30px' ,boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)' ,width:'100%' ,marginBottom:'10px'}}>
                <CardMedia alt="green iguana" height="140" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {mail.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {mail.content}
                  </Typography>
                </CardContent>
                <CardActions className="MailButtomMenuCardActions">
                  <Button size="small">Open</Button>
                  <FavoriteIcon className="MailButtomMenuIconFavorite"
                                onClick={() => favoriteHandler(mail.id)} 
                                sx={{
                                  color: favorites.includes(mail.id) ? "red" : "white",
                                  stroke: 'red',
                                  strokeWidth: 2, 
                                }}
                                  />
                </CardActions>
              </Card>
            ))}
          </div>
        </div>

        <div className="MailButtomMenu">
          <MenuIcon
            className="MailButtomMenuIcon"
            onClick={MailButtomMenuIconHandler}
          />
          {MailButtomMenu && (
            <div className="MainBoxCss">
              <MailBox />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
