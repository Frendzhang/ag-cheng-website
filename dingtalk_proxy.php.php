<?php
// 钉钉机器人 Webhook（请确认 token 有效）
$webhook = 'https://oapi.dingtalk.com/robot/send?access_token=362c8402aff4460cbb707cd7df9d88e44a6b7ca8fe588df1db121befee140486';

// 获取前端 POST 的原始数据
$data = file_get_contents('php://input');
if (empty($data)) {
    http_response_code(400);
    echo json_encode(['errcode' => 400, 'errmsg' => 'No data received']);
    exit;
}

// 发送到钉钉
$ch = curl_init($webhook);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 返回钉钉的原始响应
if ($response === false) {
    http_response_code(500);
    echo json_encode(['errcode' => 500, 'errmsg' => 'Proxy error: unable to reach DingTalk']);
} else {
    http_response_code($httpCode);
    echo $response;
}
?>