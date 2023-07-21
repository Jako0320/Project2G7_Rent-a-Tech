const router = require("express").Router();
const { User, Tech, Workorder } = require('../models');


// router.get("/",(req,res)=>{
//   res.render("landing")
// })

// router.get("/userlogin",(req,res)=>{
//   res.render("userlogin")
// })

// router.get("/techlogin",(req,res)=>{
//   res.render("techlogin")
// })

router.get('/', async (req, res) => {
try {
  const workOrderData = await Workorder.findAll({
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
  const workOrder = workOrderData.map((workorder) => workorder.get({ plain: true }));

    res.render('landing', { 
      workOrder, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
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

router.get('/profile', withAuth, async (req, res) => {
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

module.exports = router;