public class Project{
    private String name;
    private String description;
    private double initialCost;

    public Project(){
        this.name = "Untitled";
        this.description = "In the works.";
        this.initialCost = 0.0;
    }

    public Project(String name){
        this.name = name;
        this.description = "In the works.";
        this.initialCost = 0.0;
    }

    public Project(String name, String description){
        this.name = name;
        this.description = description;
        this.initialCost = 0.0;
    }

    public String elevatorPitch(){
        return name + " (" + initialCost + "): " + description;
    }

    public String getName(){
        return this.name;
    }
    public String getDescription(){
        return this.description;
    }
    public double getInitialCost(){
        return this.initialCost;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public void setInitialCost(double initialCost){
        this.initialCost = initialCost;
    }
}