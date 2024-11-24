import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Posts = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <p>Cannot find any posts, sorry.</p>;
    }

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={4} alignItems="flex-start">
                {posts.map((post) => (
                    <Grid item key={post.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                sx={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
                                image="https://picsum.photos/200/300"
                                title="Image title"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2"
                                    sx={{ fontSize: "16px", textAlign: "left" }}
                                >
                                    {post.title.substring(0, 50)}...
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    sx={{ textAlign: "left", marginTop: 2 }}
                                >
                                    {post.excerpt.substring(0, 60)}...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Posts;
