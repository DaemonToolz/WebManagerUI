
export enum Channel {
    MySpaceGeneral = "myspace-notification",
    Broadcast      = "general-notification"
}

export enum SocketFunction{
    Connect = "connect",
    Disconnect = "disconnect",
    Identify= "identify",
    OnError = "error",
    OnReconnectError = "reconnect_error"
}