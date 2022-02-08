

const tag = {
    Backend_Nginx_response_time: {
        value: 1,
        threshold: 1.5
    },
    Backend_PHP_ERROR_WARNING: {
        value: 2,
        threshold: 4
    },
    Check_SSL: {
        value: 3,
        threshold: 806323.863
    },
    Disk_Usage: {
        value: 4,
        threshold: 85
    },
    EMQ_bytes: {
        value: 5,
        threshold: 11000000
    },
    Frontend_Nginx_Response_Error_Code: {
        value: 6,
        threshold: 40
    },
    Frontend_status_503: {
        value: 7,
        threshold: 4
    },
    Frontend_status_503_link: {
        value: 8,
        threshold: 4
    },
    Frontend_Nginx_Response_Error_Code_Top: {
        value: 9,
        threshold: 20
    },
    Frontend_Nginx_response_time: {
        value: 10,
        threshold: 7
    },
    Frontend_haproxy_realtime_access: {
        value: 11,
        threshold: 300
    },
    HTTP_status: {
        value: 12,
        threshold: ''
    },
    Haproxy_Server_Up: {
        value: 13,
        threshold: 0.5
    },
    Load_AVG: {
        value: 14,
        threshold: 50
    },
    Memory_Usage: {
        value: 15,
        threshold: 95
    },
    Mongo_Status: {
        value: 16,
        threshold: 2
    },
    MongoDB_response_time: {
        value: 17,
        threshold: 2400
    },
    Mongodb_realtime_connections: {
        value: 18,
        threshold:[350, 56355]
    },
    Mysql_global_status_threads_connected: {
        value: 19,
        threshold: 1
    },
    Netstat_TCP: {
        value: 20,
        threshold: [56355, 350]
    },
    Network_Bandwidth: {
        value: 21,
        threshold: 407142857
    },
    RabbiMQ_Queues: {
        value: 22,
        threshold: 2
    },
    TCP_Connections: {
        value: 23,
        threshold: 25000
    },
    rabbitmq_channels: {
        value: 24,
        threshold: 20
    },
    rabbitmq_node_up: {
        value: 25,
        threshold: [6, 0.5]
    },
    subscriptions_max: {
        value: 26,
        threshold: 15000
    },
}


const errorValueLog = {
    dashboardId: '',
    evalMatches: '',
    orgId: '',
    panelId: '',
    ruleId: '',
    ruleName: '',
    ruleUrl: '',
    state: '',
    tags: '',
    title: ''
}


module.exports = { tag,errorValueLog }