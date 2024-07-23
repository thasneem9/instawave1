/*   import React from 'react';
import { Button } from '@chakra-ui/react';
import useSavePost from '../hooks/useSavePost';
import { IoBookmarkOutline } from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";

const SavePostButton = ({ post }) => {
    const { handleSave, saving } = useSavePost(post);

    return (
        <MdBookmarkAdd size={20} onClick={handleSave}     isLoading={saving} />
    );
}; 
 
  */




import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import useSavePost from '../hooks/useSavePost';
import { IoBookmarkOutline } from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";

const SavePostButton = ({ post }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    
  

    useEffect(() => {
        const checkBookmarkStatus = async () => {
            try {
                const res = await fetch(`/api/posts/check-bookmark/${post.id}`);
                const data = await res.json();
                setIsBookmarked(data.bookmarked);
            } catch (error) {
                console.error("Error checking bookmark status:", error);
            }
        };

        checkBookmarkStatus();
    }, [post.id]);

    const onSaveSuccess = () => {
        setIsBookmarked(true);
    };
    const { handleSave, saving } = useSavePost(post, onSaveSuccess);

    if (isBookmarked) {
        return null;
    }

    return (
        <MdBookmarkAdd size={20} onClick={handleSave} isLoading={saving} />
    );
};

export default SavePostButton;


/* import React from 'react';
import { Button } from '@chakra-ui/react';
import useSavePost from '../hooks/useSavePost';
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const SavePostButton = ({ post }) => {
    const { handleSave, saving, isSaved } = useSavePost(post, post.isSaved); // Pass initial saved state

    return (
        <Button
            onClick={handleSave}
            isLoading={saving}
            colorScheme={isSaved ? "yellow" : "gray"} // Change color based on isSaved state
            variant="ghost"
            leftIcon={isSaved ? <IoBookmark size={20} /> : <IoBookmarkOutline size={20} />} // Change icon based on isSaved state
        >
            {isSaved ? "Saved" : "Save Post"}
        </Button>
    );
}; */

