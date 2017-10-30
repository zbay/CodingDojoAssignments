public class StringManipulator {
    public String trimAndConcat(String str1, String str2){
        return str1.trim().concat(str2.trim());
    }
    public Integer getIndexOrNull(String str, char ch){
        int index = str.indexOf(ch);
        if(index > -1){
            return index;
        }
        else{
            return null;
        }
    }
    public Integer getIndexOrNull(String str, String substr){
        int index = str.indexOf(substr);
        if(index > -1){
            return index;
        }
        else{
            return null;
        }
    }

    public String concatSubstring(String str1, int start, int end, String str2){
        return str1.substring(start, end).concat(str2);
    }
}