class SystemResponse {
    static success =(res, data, message = 'success') => {
       console.log(data);
        return res.status(200).send({
            static : 'ok',
            message,
            data
        });
    }
}
export default SystemResponse;
