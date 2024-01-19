use warp::Filter;

#[tokio::main]
async fn main() {

    // TODO: Send email and password to API to create password in database
    let user = warp::path("user").and(
        warp::path("new").map(|| "Create new user")
    );

    let routes = warp::get().and(
        user
    );

    warp::serve(routes)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
