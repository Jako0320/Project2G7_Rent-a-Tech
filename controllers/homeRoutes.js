const router = require("express").Router();
const { User, Tech, Workorder } = require('../models');
const cloudinary = require('../config/cloudinaryconnection');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/workorder/:id', async (req, res) => {
  try {
    const workOrderData = await Workorder.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Tech,
          attributes: ['name'],
        }
      ],
    });

    const workorder = workOrderData.get({ plain: true });

    res.render('workorder', {
      ...workorder,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });



    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userlogin', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/userprofile');
    return;
  }

  res.render('userlogin');
});

router.get('/techlogin', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/techprofile');
    return;
  }

  res.render('techlogin');
});

router.post('/upload', async (req, res) => {
  try {
    const file = req.files.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath);
    console.log(result);
    res.send('Image uploaded successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading image.');
  }
});

router.post('/searchresult', async (req, res) => {
  const { workOrderId } = req.body;
  try {
    const workOrder = await WorkOrder.findByPk(workOrderId);
    if (workOrder) {
      res.render('searchresult', { workOrder });
    } else {
      res.render('searchresult', { notFound: true });
    }
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'An error occurred while searching for the work order.' });
  }
});

router.get('/searchresult', (req, res) => {
  res.render('searchresult');
});

router.get('/profile', (req, res) => {
  res.render('profile', { logged_in: req.session.logged_in });
});

router.get('/workorder', (req, res) => {
  res.render('workorder');
});

module.exports = router