const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmM4ZjAzYzg4NGFlZDRkNmVmNzIyMDBhNzQwOTQ0MSIsIm5iZiI6MTc1MDIyNjE5Ni4xOCwic3ViIjoiNjg1MjU1MTQ2Y2EwZmM0NjVmYmJkYTMxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.g9Z1b_MDSXZOw8Fe47gXWV-_4jmfEZKRP4JwuCFF6b4",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
  options
)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
