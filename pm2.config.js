/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630.pw
 * Date: 2021-10-29
 * Time: 16:07
 * About:
 *
 */

module.exports = {
    apps : [{
        name: "mrZLab630pw",
        cwd:"/Volumes/data/web/mrzlab630.pw/www",
        script: "npm",
        args: 'start',
        exp_backoff_restart_delay: 100,
        watch: false,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        },
        error_file:'/Volumes/data/web/mrzlab630.pw/logs/err.log',
        out_file:'/Volumes/data/web/mrzlab630.pw/logs/out.log',
        time: true,
    }]
}