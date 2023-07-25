const { Workorder } = require('../../models');

const searchID = {
  searchWorkorder: async (req, res) => {
    try {
      const { workorder_id } = req.query;

      const workorder = await Workorder.findOne({
        where: { id: workorder_id },
      });

      if (!workorder) {
        return res.render('searchresult', { message: 'Workorder not found' });
      }

      return res.render('searchresult', { workorder });
    } catch (err) {
      console.error('Error searching workorder:', err);
      return res.render('searchresult', { message: 'An error occurred during the search' });
    }
  },
};

module.exports = searchID;
