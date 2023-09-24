import { TableContainer } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

interface PokemonCardProps {
    number: number;
    name: string;
    image: string;
  }

export default function PokemonCard({number, name, image}: PokemonCardProps) {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardActionArea>
        <Link to={`/pokemon/${number}`}>
          <CardMedia
            sx={{ height: 220, width: 220 }}
            image={image}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`#${number} ${name}`}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}