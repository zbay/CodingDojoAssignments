public class ProjectTest{
    public static void main(String[] args){
        Project p = new Project();
        System.out.println(p.elevatorPitch());
        Project p2 = new Project("Movie");
        System.out.println(p2.elevatorPitch());
        Project p3 = new Project("Movie", "Comedy/drama");
        System.out.println(p3.elevatorPitch());
        p3.setName("Website");
        System.out.println(p3.elevatorPitch());
        p3.setDescription("Portfolio site");
        System.out.println(p3.elevatorPitch());
        p3.setInitialCost(3.50);
        System.out.println(p3.elevatorPitch());
    }
}