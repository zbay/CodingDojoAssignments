import java.util.ArrayList;

public class BasicJava{
    public static void main(String[] args){
        printTo255();
        printOddsTo255();
        printSum();
        int[] test1 = {1,3,5,7,9,13};
        int[] test2 = {-3, -5, -7};
        int[] test3 = {2, 10, 3};
        int[] test4 = {1, 3, 5, 7};
        int[] test5 = {1, 5, 10, -2};
        iterateArray(test1);
        findMax(test2);
        getAverage(test3);
        iterateArray(oddsTo255());
        System.out.println(greaterThanY(test4, 2));
        iterateArray(squaredArray(test5));
        iterateArray(noNegatives(test5));
        iterateArray(maxMinAverage(test5));
        iterateArray(shiftByOne(test5));
    }
    public static void printTo255(){
        for(int i = 1; i <= 255; i++){
            System.out.println(i);
        }
    }
    public static void printOddsTo255(){
        for(int i = 1; i <= 255; i+=2){
            System.out.println(i);
        }
    }

    public static void printSum(){
        int sum = 0;
        for(int i = 1; i <= 255; i++){
            sum += i;
            System.out.println("New number: " + i + " Sum: " + sum);
        }
    }

    public static void iterateArray(int[] arr){
        for(int i : arr){
            System.out.println(i);
        }
    }

    public static void findMax(int[] arr){
        int max = arr[0];
        for(int i = 1; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        System.out.println(max);
    }

    public static void getAverage(int[] arr){
        double avg;
        int sum = 0;
        for(int i : arr){
            sum += i;
        }
        avg = sum / arr.length;
        System.out.println(avg);
    }

    public static int[] oddsTo255(){
        ArrayList<Integer> odds = new ArrayList<Integer>();
        for(int i = 1; i <= 255; i += 2){
            odds.add(i);
        }
        int[] oddsArray = new int[odds.size()];
        for(int i = 0; i < odds.size(); i++){
            oddsArray[i] = odds.get(i);
        }
        return oddsArray;
    }

    public static int greaterThanY(int[] arr, int y){
        int count = 0;
        for(int i : arr){
            if(i > y){
                count++;
            }
        }
        return count;
    }

    public static int[] squaredArray(int[] arr){
        for(int i = 0; i < arr.length; i++){
            arr[i] = arr[i]*arr[i];
        }
        return arr;
    }

    public static int[] noNegatives(int[] arr){
        for(int i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                arr[i] = 0;
            }
        }
        return arr;
    }

    public static int[] maxMinAverage(int[] arr){
        int max = arr[0];
        int min = arr[0];
        int sum = arr[0];
        for(int i = 1; i < arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
            if(min > arr[i]){
                min = arr[i];
            }
            sum += arr[i];
        }
        int avg = sum/arr.length;
        return new int[] {max, min, avg};
    }

    public static int[] shiftByOne(int[] arr){
        for(int i = 0; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = 0;
        return arr;
    }
}