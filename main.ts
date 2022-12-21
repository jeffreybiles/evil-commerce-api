import { opine } from "https://deno.land/x/opine@2.3.3/mod.ts";
import { lessons } from "./lessons.ts";

// Opine is Deno's Express-like framework
// I tried to do Express through NPM, but Deno Deploy does not yet accept NPM modules
// Once it does accept them, we can switch to Express

const app = opine();

app.get("/", (req, res) => {
  res.send("Welcome to the Dinosaur API!");
});
app.get('/lessons', (req, res) => {
  res.json(lessons);
});
app.get('/lessons/:id', (req, res) => {
  const lesson = lessons.find(lesson => lesson.exampleSubdomain === req.params.id);
  if (lesson) {
    res.json({
      lesson,
      previousLesson: lessons[lessons.indexOf(lesson) - 1],
      nextLesson: lessons[lessons.indexOf(lesson) + 1],
    });
  } else {
    res.status = 404
    res.send('Lesson not found');
  }
})

app.listen(8000);