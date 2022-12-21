import express from "npm:express@4.18.2";
import { lessons } from "./lessons.ts";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to the Dinosaur API!");
});
app.get('/lessons', (req: express.Request, res: express.Response) => {
  res.json(lessons);
});
app.get('/lessons/:id', (req: express.Request, res: express.Response) => {
  const lesson = lessons.find(lesson => lesson.exampleSubdomain === req.params.id);
  if (lesson) {
    res.json({
      lesson,
      previousLesson: lessons[lessons.indexOf(lesson) - 1],
      nextLesson: lessons[lessons.indexOf(lesson) + 1],
    });
  } else {
    res.status(404).send('Lesson not found');
  }
})

app.listen(8000);