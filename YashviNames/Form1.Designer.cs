namespace YashviNames
{
    partial class YashviNames
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.LabelName = new System.Windows.Forms.Label();
            this.TextBoxNameInput = new System.Windows.Forms.TextBox();
            this.ListBoxNameList = new System.Windows.Forms.ListBox();
            this.TextBoxOutput = new System.Windows.Forms.TextBox();
            this.ButtonEnter = new System.Windows.Forms.Button();
            this.ButtonReset = new System.Windows.Forms.Button();
            this.ButtonExit = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // LabelName
            // 
            this.LabelName.AutoSize = true;
            this.LabelName.Location = new System.Drawing.Point(65, 47);
            this.LabelName.Name = "LabelName";
            this.LabelName.Size = new System.Drawing.Size(152, 16);
            this.LabelName.TabIndex = 0;
            this.LabelName.Text = "Enter a &candidate name:";
            // 
            // TextBoxNameInput
            // 
            this.TextBoxNameInput.Location = new System.Drawing.Point(234, 40);
            this.TextBoxNameInput.Name = "TextBoxNameInput";
            this.TextBoxNameInput.Size = new System.Drawing.Size(118, 22);
            this.TextBoxNameInput.TabIndex = 1;
            // 
            // ListBoxNameList
            // 
            this.ListBoxNameList.FormattingEnabled = true;
            this.ListBoxNameList.ItemHeight = 16;
            this.ListBoxNameList.Location = new System.Drawing.Point(68, 96);
            this.ListBoxNameList.Name = "ListBoxNameList";
            this.ListBoxNameList.Size = new System.Drawing.Size(212, 132);
            this.ListBoxNameList.TabIndex = 2;
            // 
            // TextBoxOutput
            // 
            this.TextBoxOutput.Location = new System.Drawing.Point(68, 250);
            this.TextBoxOutput.Name = "TextBoxOutput";
            this.TextBoxOutput.ReadOnly = true;
            this.TextBoxOutput.Size = new System.Drawing.Size(233, 22);
            this.TextBoxOutput.TabIndex = 3;
            // 
            // ButtonEnter
            // 
            this.ButtonEnter.Location = new System.Drawing.Point(59, 315);
            this.ButtonEnter.Name = "ButtonEnter";
            this.ButtonEnter.Size = new System.Drawing.Size(84, 33);
            this.ButtonEnter.TabIndex = 4;
            this.ButtonEnter.Text = "&Enter";
            this.ButtonEnter.UseVisualStyleBackColor = true;
            this.ButtonEnter.Click += new System.EventHandler(this.ButtonEnter_Click);
            // 
            // ButtonReset
            // 
            this.ButtonReset.DialogResult = System.Windows.Forms.DialogResult.Cancel;
            this.ButtonReset.Location = new System.Drawing.Point(149, 315);
            this.ButtonReset.Name = "ButtonReset";
            this.ButtonReset.Size = new System.Drawing.Size(75, 33);
            this.ButtonReset.TabIndex = 5;
            this.ButtonReset.Text = "&Reset";
            this.ButtonReset.UseVisualStyleBackColor = true;
            this.ButtonReset.Click += new System.EventHandler(this.ButtonReset_Click);
            // 
            // ButtonExit
            // 
            this.ButtonExit.Location = new System.Drawing.Point(234, 315);
            this.ButtonExit.Name = "ButtonExit";
            this.ButtonExit.Size = new System.Drawing.Size(75, 33);
            this.ButtonExit.TabIndex = 6;
            this.ButtonExit.Text = "E&xit";
            this.ButtonExit.UseVisualStyleBackColor = true;
            this.ButtonExit.Click += new System.EventHandler(this.ButtonExit_Click);
            // 
            // YashviNames
            // 
            this.AcceptButton = this.ButtonEnter;
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.CancelButton = this.ButtonReset;
            this.ClientSize = new System.Drawing.Size(408, 398);
            this.Controls.Add(this.ButtonExit);
            this.Controls.Add(this.ButtonReset);
            this.Controls.Add(this.ButtonEnter);
            this.Controls.Add(this.TextBoxOutput);
            this.Controls.Add(this.ListBoxNameList);
            this.Controls.Add(this.TextBoxNameInput);
            this.Controls.Add(this.LabelName);
            this.MaximumSize = new System.Drawing.Size(426, 445);
            this.MinimumSize = new System.Drawing.Size(426, 445);
            this.Name = "YashviNames";
            this.Text = "Yashvi Names";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label LabelName;
        private System.Windows.Forms.TextBox TextBoxNameInput;
        private System.Windows.Forms.ListBox ListBoxNameList;
        private System.Windows.Forms.TextBox TextBoxOutput;
        private System.Windows.Forms.Button ButtonEnter;
        private System.Windows.Forms.Button ButtonReset;
        private System.Windows.Forms.Button ButtonExit;
    }
}

