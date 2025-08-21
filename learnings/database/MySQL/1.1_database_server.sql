--nature and function of the MySQL Server

--  A (The Core Substance):
-- The MySQL Server is a program, technically named mysqld, that runs continuously as a process (or service) on the host operating system. 
-- This active process is the living database system.

-- [OS]
--tasklist | findstr "mysqld.exe"

-- My operating system 
-- |
-- ()'mysqld.exe' process in the system's task list) 
-- -tasklist(asking the OS "show me all that lives") | findstr(filtering) "mysqld.exe"

-- mysqld.exe                    4296 Services                   0        140 K
-- mysqld.exe                    5248 Services                   0      8,524 K
-- -- |
-- [is actively hosting the living [MySQL Server]]

--  B (The (Gatekeeper) ): The server's primary, constant (action)  is to listen for connection requests from client programs on a specific network port, typically TCP port 3306. It is the sole, authorized gateway to the data.
-- The server process is actively listening for connections on its designated port.

--[OS]
-- netstat -ano | findstr "3306"
--netstat -ano(see  all network activity) | findstr(filter  the server's known "radio frequency") "3306"

-- The mysqld.exe proces
-- |
-- unique PID is bound to network port 3306 and is in the 'LISTENING' state)
--   TCP    [::]:3306              [::]:0                 LISTENING       5248
--   TCP    [::]:33060             [::]:0                 LISTENING       5248
-- -- |
-- is actively performing listening


--  E (The Client-Server <->):
-- The server exists in an inseparable relationship  with client programs (mysql.exe, MySQL Workbench, your application).
-- The server is the authoritative source of truth, while clients are the agents that perform  (send queries) and receive the results of perception (fetch data).

-- The client and server can form their functional, inseparable bond
-- [Server]

-- [MySQL Server ] <-> [MySQL Client]

-- [mysqld.exe(always runs in the background)] <-> [mysql.exe]

--  & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p ----> mysql prompt//mysql monitor




-- outside mysql prompt - powershell,cmd
-- mysql -u root -p -e "SELECT 'Connection successful.';"
-- [mysql] -u root -p -e "(SELECT) 'Connection successful.';"

-- The client-server relationship
-- |
-- my client's request was sent, the server processed it, and a valid result was successfully returned to my
--mysql> SELECT 'Connection successful.';
-- +------------------------+
-- | Connection successful. |
-- +------------------------+
-- | Connection successful. |
-- +------------------------+
-- 1 row in set (0.00 sec))
-- |
-- is a functional and established

--  D (The Configurable ): The server's identity and behavior are defined by hundreds of "system variables" which are its {qualities} . 
--These control everything from memory allocation (innodb_buffer_pool_size) to security protocols.
-- The server possesses configurable {qualities}  that define its behavior.

-- mysql> SHOW VARIABLES LIKE 'max_connections';
-- +-----------------+-------+
-- | Variable_name   | Value |
-- +-----------------+-------+
-- | max_connections | 151   |
-- +-----------------+-------+
-- 1 row in set (0.06 sec)


-- The [MySQL server ]
-- |
-- directly query and perceive the value of a specific behavioral  like '{max_connections}')
-- |
-- is defined by a set of perceivable qualities


--  C (The Data Guardian): The server has absolute authority over a dedicated "data directory" on the filesystem where it stores all databases and tables in a highly optimized, proprietary format. 
--Direct manipulation of these files is forbidden and leads to corruption.
--The server is the absolute guardian of data, stored in a format not meant for direct access.

-- (SELECT @@datadir;) - reveal {data directory location}

-- mysql> SELECT @@datadir;
-- +---------------------------------------------+
-- | @@datadir                                   |
-- +---------------------------------------------+
-- | C:\ProgramData\MySQL\MySQL Server 8.0\Data\ | - path of data directory
-- +---------------------------------------------+
-- 1 row in set (0.00 sec)


-- [The physical data files] 
-- |
-- ([results in incomprehensible binary data, proving they are not simple text and require the server as an intermediary ].)
-- |
-- [are exclusively managed by the server in a proprietary format] 


-- [mysqld] - server  <----(Network)----> [mysql]-client

-- [Server  [mysqld] (LISTEN)] <═════ [Client [mysql] (CURD operations- query)]

--Socket 🔌<--Plug 
--[Server{max_connections: 151}] 🔌<--[client1] 🔌<--[client2] ... (Client is the plug, Server is the socket with the limit)
--files are stored on the computer's filesystem  - server not vault it holds the key like a warden master only one 
--[Server (Process): mysqld] 🔑 ═════> [Filesystem Vault: C:\...\Data\*.ibd]  they are meaningless binary code without the server's  (mysqld process) to interpret them is difficult
--Server <--> Coded Files on Disk
-- files are stored inside the server 


--  [Client] sends "SELECT..." │ └───> over Network (Port 3306) │ [Server: mysqld] (listens), (checks) [: {connections} < 151?] │ └───> uses 🔑 to unlock [Vault: Data Files on Disk]
--   │ └───> sends Data back over Network │ ▼ 👁️ [Client] sees the results.

--The Server is the sovereign entity that possesses the limits and guards the treasure; the Client is the petitioner that requests access.


--[Client] 🗣️ ---> 🌐 ---> [Server 👂] --(Checks {})--> [🧠 Reads & Interprets 📚] --(Creates Reply)--> 🌐 ---> [Client 👁️]