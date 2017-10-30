import java.util.HashMap;

public class TrackList{
    public static void main(String[] args){
        HashMap<String, String> trackList = new HashMap<>();
        trackList.put("Song 1", "ooh baby");
        trackList.put("Song 2", "oh yeah");
        trackList.put("Song 3", "la la la");
        trackList.put("Song 4", "do re mi fa");
        String lyrics3 = trackList.get("Song 3");
        for(String key: trackList.keySet()){
            String value = trackList.get(key);
            System.out.println(key + ": " + value);
        }
    }
}