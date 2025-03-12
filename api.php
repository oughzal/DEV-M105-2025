<?php
$database = new SQLite3('myDatabase.db');
class User {
    private $database;

    public function __construct($database) {
        $this->database = $database;
    }

    public function getAllUsers() {
        $result = $this->database->query('SELECT * FROM users');
        $users = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $users[] = $row;
        }
        return $users;
    }

    public function getUserById($id) {
        $stmt = $this->database->prepare('SELECT * FROM users WHERE id = :id');
        $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
        $result = $stmt->execute();
        return $result->fetchArray(SQLITE3_ASSOC);
    }

    public function createUser($nom, $prenom) {
        $stmt = $this->database->prepare('INSERT INTO users (nom, prenom) VALUES (:nom, :prenom)');
        $stmt->bindValue(':nom', $nom, SQLITE3_TEXT);
        $stmt->bindValue(':prenom', $prenom, SQLITE3_TEXT);
        return $stmt->execute() ? $this->database->lastInsertRowID() : false;
    }

    public function updateUser($id, $nom, $prenom) {
        $stmt = $this->database->prepare('UPDATE users SET nom = :nom, prenom = :prenom WHERE id = :id');
        $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
        $stmt->bindValue(':nom', $nom, SQLITE3_TEXT);
        $stmt->bindValue(':prenom', $prenom, SQLITE3_TEXT);
        return $stmt->execute();
    }

    public function deleteUser($id) {
        $stmt = $this->database->prepare('DELETE FROM users WHERE id = :id');
        $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
        return $stmt->execute();
    }
}

$user = new User($database);

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $stmt = $database->prepare('SELECT * FROM users WHERE id = :id');
            $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
            $result = $stmt->execute();
            echo json_encode($result->fetchArray(SQLITE3_ASSOC));
        } else {
            $result = $database->query('SELECT * FROM users');
            $users = [];
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $users[] = $row;
            }
            echo json_encode($users);
        }
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $nom = $data['nom'];
        $prenom = $data['prenom'];
        $stmt = $database->prepare('INSERT INTO users (nom, prenom) VALUES (:nom, :prenom)');
        $stmt->bindValue(':nom', $nom, SQLITE3_TEXT);
        $stmt->bindValue(':prenom', $prenom, SQLITE3_TEXT);
        if ($stmt->execute()) {
            echo json_encode(["id" => $database->lastInsertRowID()]);
        } else {
            echo json_encode(["error" => $database->lastErrorMsg()]);
        }
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $id = intval($_GET['id']);
        $nom = $data['nom'];
        $prenom = $data['prenom'];
        $stmt = $database->prepare('UPDATE users SET nom = :nom, prenom = :prenom WHERE id = :id');
        $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
        $stmt->bindValue(':nom', $nom, SQLITE3_TEXT);
        $stmt->bindValue(':prenom', $prenom, SQLITE3_TEXT);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Record updated successfully"]);
        } else {
            echo json_encode(["error" => $database->lastErrorMsg()]);
        }
        break;
    case 'DELETE':
        $id = intval($_GET['id']);
        $stmt = $database->prepare('DELETE FROM users WHERE id = :id');
        $stmt->bindValue(':id', $id, SQLITE3_INTEGER);
        if ($stmt->execute()) {
            echo json_encode(["message" => "Record deleted successfully"]);
        } else {
            echo json_encode(["error" => $database->lastErrorMsg()]);
        }
        break;
    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

$database->close();

?>