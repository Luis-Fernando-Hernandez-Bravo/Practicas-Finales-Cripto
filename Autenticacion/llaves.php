<?php 

$privateKey = openssl_pkey_new(array('private_key_bits' => 1024,
'private_key_type'=>OPENSSL_KEYTYPE_RSA));

$details = openssl_pkey_get_details($privateKey);
$publicKey = $details['key'];

$realprivateKey;
openssl_pkey_export($privateKey,$realprivateKey); 

echo "Llave publica: ".$publicKey." \nLlave privada: ".$realprivateKey;
 ?>