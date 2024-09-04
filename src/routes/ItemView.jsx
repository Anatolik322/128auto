import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ProductView = (props) => {
  const param = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("http://localhost:5000/items/66ceea83d0810c10a424e560")
      .then((res) => {
        setItem(res.data);
        setLoading(false);
        console.log("res.data", res.data);
      })
      .catch((err) => console.log(err));
  }, [param.id]);

  return (
    <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
      {loading && (
        <ReactLoading
          type="balls"
          color="#f28a0a"
          height={100}
          width={100}
          className="m-auto"
        />
      )}
      {/* {item && <Item item={item} />} */}
      {item && (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={5}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={
                    "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
                  }
                  alt={item.name}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h4" component="h1" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                    ${item.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {item.details}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default ProductView;
