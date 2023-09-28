
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace YashviNames
{
    public partial class YashviNames : Form
    {
        public YashviNames()
        {
            InitializeComponent();
        }

        // Global Variables.
        int validNamesAccepted = 0;
        int totalLength = 0;

        /// <summary>
        /// Exit click close the application 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonExit_Click(object sender, EventArgs e)
        {
            Close();

        }
        /// <summary>
        /// Reset the form to its default state with cleared inout and output fields, and focus set appropriately.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonReset_Click(object sender, EventArgs e)
        {
            // Clear all the fields.
            TextBoxNameInput.Clear();
            ListBoxNameList.Items.Clear();
            TextBoxOutput.Clear();

            //Reset the global variables 
            totalLength = 0;
            validNamesAccepted = 0;

            //Set the focus 
            TextBoxNameInput.Focus();

        }
        /// <summary>
        /// For an entered name check whether there is a letter "Y" in the second or third position if so, it's valid and is recorded. Statiscal data 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void ButtonEnter_Click(object sender, EventArgs e)
        {
            // Constant declaration.
            const string TargetLetter = "y";
            const int MinimumLenght = 3;

            // Does the entered name have atleaast 3 letters 
            if (TextBoxNameInput.Text.Length >= MinimumLenght)
            {
                string secondLetter = TextBoxNameInput.Text.Substring(1, 1);
                string thirdLetter = TextBoxNameInput.Text.Substring(2, 1);

                // Does the entered name have second character or third character as "y"

                if (secondLetter == TargetLetter || thirdLetter == TargetLetter)
                {
                    // increment global variabes based on the vaalues 
                    validNamesAccepted++;
                    totalLength += TextBoxNameInput.Text.Length;

                    // append the new name to the name list
                    ListBoxNameList.Items.Add(TextBoxNameInput.Text + "\r\n");

                    // Modify the output with stats
                    TextBoxOutput.Text = validNamesAccepted + " names entered so far.  Average Lenght: " + totalLength / validNamesAccepted;

                    TextBoxNameInput.Clear();

                }
                else
                {
                    // y is not in the correct position 
                    MessageBox.Show("Valid yashvi names have 2nd or 3rd letters as \"" + TargetLetter + "\".");
                    TextBoxNameInput.SelectAll();
                    TextBoxNameInput.Focus();
                }


            }
            else 
            {
                // Name is too short. Report error and set focus 
                MessageBox.Show("The name s too short for the valis yashvi naming rules. Minimum length is " + MinimumLenght + ".");
                TextBoxNameInput.SelectAll();
                TextBoxNameInput.Focus();
            
            }




        }
    }
}
