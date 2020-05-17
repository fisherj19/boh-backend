const companies = {
  getAll: (req, res) => {
    const pool = req.app.get('pool');
    const qryStr = `
      select *
      from public.company
      order by id asc limit 10
    `;

    pool.select(res, qryStr);
  },

  getById: (req, res) => {
    const pool = req.app.get('pool');
    const qryStr = `
      select *
      from public.company
      where id = $1
    `;
    const params = new Array(req.params.id);

    pool.selectOne(res, qryStr, params, 'company');
  },

  insert: (req, res) => {
    const pool = req.app.get('pool');
    const qryStr = `
      insert into public.company (
        company_name,
        etc.....
      ) values (
        $1,
        $2,
        $3
      )
    `;
    const params = new Array(req.body.company_name, req.body.whateverelse, req.body.other);

    pool.insert(res, qryStr, params);
  }
};

module.exports = companies;
