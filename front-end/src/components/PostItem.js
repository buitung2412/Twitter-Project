import React from 'react';

export default function PostItem() {
  return (
    <div className="post-item">
    <p className="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusamus, suscipit vel sapiente cum nulla tempora? Vel, cum nulla iure ducimus expedita nam, in,
         rem voluptatum aperiam facere fugit dolorem.
    </p>
    <div className="post-footer">
        <div className="post-infors">
            <span>by Tung Bui</span>
            <span>Date: 26/1/2022</span>
        </div>
        <div className="post-edit-delete">
            <span>Edit</span>
            <span>Delete</span>
            <span className="delete-question">Are you sure</span>
            <span>Yes</span>
            <span>No</span>
        </div>
    </div>
    <div className="post-edit-form">
        <form className="edit-form">
            <textarea
                type = "text"
                name = "content"
                id = "content"
                className = "content"
                placeholder="What's happening?"
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero expedita repudiandae necessitatibus! Numquam sequi dolorem nulla esse doloremque unde, quaerat maiores sapiente repellat adipisci ipsum nihil excepturi error sed? Veniam?
            </textarea>
            <div className="btn-container">
                <button className="btn" type="button">
                    Update
                </button>
                <button className="btn" type="button">
                    Cancel
                </button>
            </div>
        </form>
    </div>
</div>
  );
}