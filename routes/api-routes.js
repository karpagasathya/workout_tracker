const db = require("../models");

module.exports = (app) => {

  // getting the workouts  
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((dbWorkout) => {
      res.json(dbWorkout);
    });
  });
    
  //posting a new workout
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
    
  //Adding/updating exercises to the workout 
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { useFindAndModify: false })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", (req, res) => {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  //getting workout range for stats page  
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
