import { Scene } from "./Scene";

class Program
{
    public static Main()
    {
        let scene = new Scene();
        scene.Init();
        scene.Animate();
    }
}
Program.Main();