const express = require('express');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("build"));

const bodyParser = require('body-parser')
const mongoose   = require('mongoose')

const Pic = require('./models/pic')

mongoose.connect('mongodb://localhost:27017/myPic');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get('/pics', (req, res) => {
  Pic.find({}, (err, pics) => {
    if (err) {console.error(err); return res.sendStatus(500);}

    res.json(pics)
  })
})

app.delete('/pics/:pic_id', (req, res, next) => {
    Pic.findByIdAndRemove(req.params.pic_id, function(error, pic) {
    var response = {
      message: "Picture successfully deleted",
      id: pic.pic_id
    };
    Pic.find({}, (err, pic) => {
      if (err) {console.error(err); return res.sendStatus(500);}

      res.json(pic)
    })
  });
})

app.post('/create-pic', (req, res) => {
  let pic = new Pic()
  pic.name = req.body.name
  pic.path = req.body.path

  pic.save(err => {
    if (err) {console.error(err); return res.sendStatus(500);}

      Pic.find(function(err, pics) {
        if(err) {
          res.send(err)
        } else {
          res.send(pics)
        }
      })
  })
})

app.put('/editpics/:pic', function (req, res) {
  Pic.findById(req.body.item._id, function (err, pic) {
    if (err) {
        res.status(500).send(err);
    } else {
        pic.name = req.body.item.name || pic.name;
        pic.path = req.body.item.path || pic.path;

        pic.save(function (err, pic) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(pic);
        });
    }
  });
})

function run_server() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) run_server();
