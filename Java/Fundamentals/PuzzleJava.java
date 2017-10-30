import java.lang.Math;
import java.util.*;

public class PuzzleJava{
    public static void main(String[] args){
       // iterateArray(task1());
        //iterateArray(task2());
        //task3();
        //iterateArray(task4());
        //iterateArray(task5());
        //task6();
        iterateArray(task7());
    }
    private static void iterateArray(int[] arr){
        for(int i : arr){
            System.out.println(i);
        }
    }
    private static void iterateArray(Integer[] arr){
        for(Integer i : arr){
            System.out.println(i);
        }
    }
    private static void iterateArray(String[] arr){
        for(String s : arr){
            System.out.println(s);
        }
    }
    public static Integer[] task1(){
        int[] test = {3,5,1,2,7,9,8,13,25,32};
        ArrayList<Integer> bigs = new ArrayList<Integer>();
        int sum = 0;
        for(int i = 0; i < test.length; i++){
            sum += test[i];
            if(test[i] > 10){
                bigs.add(test[i]);
            }
        }
        System.out.println(sum);
        Integer[] returnThis = new Integer[bigs.size()];
        return bigs.toArray(returnThis);
    }
    public static String[] task2(){
        Random random = new Random();
        String[] test = {"Nancy", "Jinichi", "Fujibayashi", "Momichi", "Ishikawa"};
        ArrayList<String> bigs = new ArrayList<String>();
        for(int i = 0; i < test.length * 5; i++){
            int random1 = random.nextInt(test.length);;
            int random2 = random1;
            while(random2 == random1){
                random2 = random.nextInt(test.length);;
            }
            String temp = test[random1];
            test[random1] = test[random2];
            test[random2] = temp;
        }
        for(String s : test){
            if(s.length() > 5){
                bigs.add(s);
            }
        }
        String[] returnThis = new String[bigs.size()];
        return bigs.toArray(returnThis);
    }
    public static void task3(){
        Random random = new Random();
        char[] alphabet = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
        for(int i = 0; i < alphabet.length * 5; i++){
            int random1 = random.nextInt(alphabet.length);
            int random2 = random1;
            while(random2 == random1){
                random2 = random.nextInt(alphabet.length);
            }
            char temp = alphabet[random1];
            alphabet[random1] = alphabet[random2];
            alphabet[random2] = temp;
        }
        System.out.println(alphabet[alphabet.length-1]);
        char first = alphabet[0];
        System.out.println(alphabet[0]);
        if(first == 'a' || first == 'e' || first == 'i' || first == 'o' || first == 'u'){
            System.out.println("First char is a vowel!");
        }
    }
    public static int[] task4(){
        Random random = new Random();
        int[] randoms = new int[10];
        for(int i = 0; i < randoms.length; i++){
            randoms[i] = random.nextInt(46) + 55;
        }
        return randoms;
    }
    public static int[] task5(){
        Random random = new Random();
        int[] randoms = new int[10];
        for(int i = 0; i < randoms.length; i++){
            randoms[i] = random.nextInt(46) + 55;
        }
        Arrays.sort(randoms);
        iterateArray(randoms);
        System.out.println("Min: " + randoms[0] + ", Max: " + randoms[randoms.length-1]);
        return randoms;
    }
    public static String task6(){
        Random random = new Random();
        String manyChars = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM,./<>?:;[]{}|!@#$%^&*()-_+=~";
        String randomStr = "";
        for(int i = 0; i < 5; i++){
            int randomIndex = random.nextInt(manyChars.length());
            randomStr += manyChars.charAt(randomIndex);
        }
        return randomStr;
    }
    public static String[] task7(){
        String[] randoms = new String[10];
        for(int i = 0; i < randoms.length; i++){
            randoms[i] = task6();
        }
        return randoms;
    }
}