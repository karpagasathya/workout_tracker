const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
      db.Workout.find({}).then((dbWorkout)=> {
        res.json(dbWorkout);
      });
    });

    app.post("/api/workouts", ({body}, res) => {
      db.Workout.create(body)
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {

      db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    });

    
    app.post("/api/workouts/range", (req, res)=> {
      db.Workout.create({})
        .then((data) => res.json(data))
        .catch((err) => {
          res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({})
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.json(err);
        });
    });
}
