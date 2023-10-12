import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Grid, Link } from '@mui/material';


export default function GyphyGroup({data}) {

  if (!data) return <>No elements</>

  console.log('here', data)

  return (
  
    <Grid container spacing={2}>
    {
      data.map((gifhy) => (
        <Grid item xs={3} key={gifhy.id}>
          <Card sx={{ maxWidth: 345, height: 400 }} >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {gifhy.username.slice(0, 1).toUpperCase()}
                </Avatar>
              }
              title={gifhy.title}
              subheader={`rating ${gifhy.rating}`}
            />
            <CardMedia
              component="img"
              height="194"
              image={gifhy.images.preview_gif.url}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <Link href={gifhy.source_post_url} color="inherit" target="_blank">
                 {gifhy.source_post_url}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))
    }
    </Grid>
  );
}